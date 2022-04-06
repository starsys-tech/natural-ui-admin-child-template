const http = {
  request: () => {
    return {
      code: 200,
      message: 'ok',
      type: 'success',
      result: {
        page: 0,
        pageSize: 0,
        pageCount: 0,
        list: [],
      },
    };
  },
};

module.exports = http;
