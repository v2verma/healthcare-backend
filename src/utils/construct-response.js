export const errorResponse = (res, status, title, body) => {
    return res.status(status).send(
      {
        message: title,
        error: {
          message: body,
        },
        response: null
      }
    );
  }
  
export const successResponse = (res, status, title, body) => {
    return res.status(status).json(
      {
        message: title,
        response: body,
        error: null
      }
    );
  }
