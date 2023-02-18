module.exports = {
    logRoutingInfo: (req,res,next) => {
        console.log(`${req.method} ${req.url}`);
        next();
    },

    withAuth: (req, res, next) => {
        if (!req.session.loggedIn) {
            res.redirect('/login');
        } else {
            next();
        }
    },

    format_date: (date) => {
        return `${new Date(date).getMonth() + 1 }/${new Date(date).getDate()}/${
          new Date(date).getFullYear()
        }`;
      },
}