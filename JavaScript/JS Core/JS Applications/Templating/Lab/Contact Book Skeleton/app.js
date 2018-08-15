(async () => {
    const data = await $.get('./data.json');
    const contactHTML=await $.get('.templates/contact.hbs');
    let contactTemplate =Handlebars.compile(contactHTML);
    let finalData ={contacts:data};
    let resultHTML=contactTemplate(finalData);
    $('#list').append(resultHTML);
})();