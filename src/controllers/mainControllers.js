module.exports = {
    index: (req, res) => {
        return res.render('index')
    },
    about: (req, res) => {
        return res.render('about')
    },
    music: (req, res) => {
        return res.render('music')
    },
    contact: (req, res) => {
        return res.render('contact')
    },
}