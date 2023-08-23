import  * as Feed from '../constants/images'
export  const Users =[
 {
    user:"john",
    image:'https://randomuser.me/api/portraits/men/0.jpg'
 },
 {
    user:"nateNetaliMendis",
    image:'https://randomuser.me/api/portraits/men/73.jpg'
 },

 {
    user:"leena",
    image:'https://randomuser.me/api/portraits/women/91.jpg'
 },

 {
    user:"karen",
    image:'https://randomuser.me/api/portraits/women/32.jpg'
 },

 {
    user:"josh",
    image:'https://randomuser.me/api/portraits/men/66.jpg'
 },

 {
    user:"Negod",
    image:'https://randomuser.me/api/portraits/men/88.jpg'
 },
]

export const POSTS = [
    {
        imageUrl:Feed.firstPost,
        user:Users[0].user,
        likes:40,
        caption:'feeels crazy',
        profile_picture:Users[0].image,
        comments:[
            {
                user:'john wick',
                comment:"wow awesome man keep it up "
            },
            {
                user:'teena',
                comment:"its look like ocean"
            }
        ]
    },
    {
        imageUrl:Feed.horse,
        user:Users[1].user,
        likes:40,
        caption:'feeels crazy',
        profile_picture:Users[1].image,
        comments:[
            {
                user:'john wick',
                comment:"wow awesome man keep it up "
            },
            {
                user:'teena',
                comment:"its look like ocean"
            }
        ]
    },

    {
        imageUrl:Feed.horse,
        user:Users[2].user,
        likes:40,
        caption:'feeels crazy',
        profile_picture:Users[2].image,
        comments:[
            {
                user:'john wick',
                comment:"wow awesome man keep it up "
            },
            {
                user:'teena',
                comment:"its look like ocean"
            }
        ]
    },

    {
        imageUrl:Feed.horse,
        user:Users[3].user,
        likes:40,
        caption:'feeels crazy',
        profile_picture:Users[3].image,
        comments:[
            {
                user:'john wick',
                comment:"wow awesome man keep it up "
            },
            {
                user:'teena',
                comment:"its look like ocean"
            }
        ]
    }
]