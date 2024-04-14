// export const asyncHandler = ()=>{

// }


// const asyncHandler = (fn)=>{
//     async (req, res, next)=>{
//         try {
//             await fn(req, res, next)
//         } catch (error) {
//             console.log("error in asynhandeler"); 
//             res.status(error.code || 500 ).json ({
//                 sucess : false, 
//                 message : error.message
//             })
//         }
//     }
// }



// how to handle this using the promises
const asyncHandler = (requestHandler) =>{
    (req, res , next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

export {asyncHandler} 