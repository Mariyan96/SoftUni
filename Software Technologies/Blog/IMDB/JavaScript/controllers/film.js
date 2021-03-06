const Film = require('../models').Film;

module.exports = {
    index: (req, res) => {
        Film.findAll().then(films=>{
            res.render('film/index',{'films':films})
        })

    },
    createGet: (req, res) => {
        res.render('film/create')
    },
    createPost: (req, res) => {
        let args = req.body.film;
        Film.create(args).then(()=>{
            return res.redirect("/");
        })
    },
    editGet: (req, res) => {
        let id = req.params.id;
        Film.findById(id).then(film=>
        {
            res.render('film/edit',{'film':film})
        })

    },

    editPost: (req, res) => {
        let id = req.params.id;
        let args=req.body.film;
        Film.findById(id).then(film=>
        {
            film.updateAttributes(args).then(()=>
            {
                res.redirect('/')
            })

        })
    },

    deleteGet: (req, res) => {
        let id = req.params.id;
        Film.findById(id).then(film	=>
        {
            res.render('film/delete',{'film':film})
        })

    },
    deletePost: (req, res) => {
        let id = req.params.id;
        Film.findById(id).then(film => {
            film.destroy().then(() => {
                res.redirect('/')
            })

        })
    }
};