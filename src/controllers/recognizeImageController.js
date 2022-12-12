const { adapterRequest } = require("../helpers/adapterRequest");
const composeResponse = require("../helpers/componseResponse");
const HttpCodes = require("../constants/httpCodes");
const AppMessages = require("../constants/appMessages");
const pdfgenerateService = require("../services/other/pdfgenerateService");

exports.recognize = async (req, res) => {
  // const fs = require("fs");
  // // in the callback:
  // fs.writeFile("image.jpeg", req.body, (error) => {
  //  if (error) {
  //   throw error;
  // }
  //  console.log("Image saved.");
  // });

  console.log("req.body: received file  type ", typeof(req.body.imageData));
  console.log("req.body: received file  type ", req.body.userName);
  var base64Data = req.body.imageData.replace(/^data:image\/jpeg;base64,/, "");
  var base64Data = Buffer.from(base64Data, "base64");

  require("fs").writeFileSync("out.jpeg", base64Data, "base64", function (err) {
    console.log(err);
  });



  // try {
  //   const newFile = await File.create({
  //     name: req.file.filename,
  //   });
  //   res.status(200).json({
  //     status: "success",
  //     message: "File created successfully!!",
  //   });
  // } catch (error) {
  //   res.json({
  //     error,
  //   });
  // }

  try {
    //Compose Response
    var response = composeResponse.success(
      1,
      AppMessages.IMAGE_RECEIVED,
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
