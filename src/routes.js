import news from "@/views/news";
import login from "@/views/login";
import comment from "@/views/comment"

export default [
    {
        path : '/news',
        component: news,
        name : 'news'
    },
    {
        path : '/login',
        component : login,
        name : 'login'
    },
    {
        path : '/addComment',
        component: comment,
        name : 'addComment'
    },
]
