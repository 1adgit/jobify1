import { body, param , validationResult } from "express-validator";
import { BadRequestError,NotFoundError } from "../errors/customError.js";
import { JOB_STATUS,JOB_TYPE } from "../utils/constants.js";
import Job from "../models/jobModels.js";
import mongoose from "mongoose";

const withValidationErrors = (validateValues) =>{
    return [validateValues,
        (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
          const errorMessages = errors.array().map((error)=>error.msg);
          if(errorMessages[0].startsWith("no job with id :")){
            throw new NotFoundError(errorMessages[0]);  
          }
          throw new BadRequestError(errorMessages);

          
        }
        next();
      },];
};


export const validateJobInput = withValidationErrors([
  body('company').notEmpty().withMessage("company is required"),
  body('position').notEmpty().withMessage("position is required"),
  body('jobLocation').notEmpty().withMessage("Job location is required"),
  body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('Invalid job status'),
  body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('Invalid job type'),
])

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value) =>{
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if(!isValidId) throw new BadRequestError("Invalid MongoDB id");

    const job = await Job.findById(value);
    if (!job) {
      throw new NotFoundError(`no job with id : ${value}`);
    }
  })
])