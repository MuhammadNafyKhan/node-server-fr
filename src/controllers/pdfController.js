const { adapterRequest } = require("../helpers/adapterRequest");
const composeResponse = require("../helpers/componseResponse");
const HttpCodes = require("../constants/httpCodes");
const AppMessages = require("../constants/appMessages");
const pdfgenerateService = require("../services/other/pdfgenerateService");




exports.generatePDF = async (req, res) => {
  var httpRequest = adapterRequest(req);
  try {
    var signal = await pdfgenerateService.generatePDF(httpRequest);
    //Compose Response
    var response = composeResponse.success(
      httpRequest,
      1,
      AppMessages.PDF_SUCCESSFULLY_GENERATED,
      signal,
      HttpCodes.OK
    );

    return res.status(HttpCodes.OK).send(response);
  } catch (error) {
    //Compose Error Response
    var errorResponse = composeResponse.genericError(
      AppMessages.ERROR,
      AppMessages.APP_ERROR_CODE,
      AppMessages.INTERNAL_SERVER_ERROR
    );
    return res.status(HttpCodes.INTERNAL_SERVER_ERROR).send(errorResponse);
  }
};
