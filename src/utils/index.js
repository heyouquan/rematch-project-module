import createHistory from 'history/createBrowserHistory'

const history = createHistory({
    forceRefresh: true //强制刷新页面
});

export default history