type params = {
    path: string;
    url: string;
    req: any;
    error: any;
}

function errorLog(params: params) {
    console.log('ERR ' + params.path, {
        ...params,
        reqStr: JSON.stringify(params.req)
    })
}
export default errorLog