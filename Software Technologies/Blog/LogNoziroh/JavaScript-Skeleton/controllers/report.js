const Report = require('../models').Report;

module.exports = {
    index: (req, res) => {
        Report.findAll().then(reports=>{
            res.render('report/index',{'reports':reports})
        })
    },
    createGet: (req, res) => {
        res.render('report/create')
    },
    createPost: (req, res) => {
        let args = req.body.report;
        Report.create(args).then(()=>{
            return res.redirect("/");
        })
    },
    detailsGet: (req, res) => {
        let id = req.params.id;
        Report.findById(id).then(report=>
        {
            res.render('report/details',{'report':report})
        })
    },
    deleteGet: (req, res) => {
        let id = req.params.id;
        Report.findById(id).then(report=>
        {
            res.render('report/delete',{'report':report})
        })

    },
    deletePost: (req, res) => {
        let id = req.params.id;
        Report.findById(id).then(report => {
            report.destroy().then(() => {
                res.redirect('/')
            })

        })
    }
};