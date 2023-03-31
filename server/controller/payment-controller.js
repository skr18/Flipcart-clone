// import paytmchecksum from '../paytm/PaytmChecksum.js';
// import { paytmParams, paytmMerchantkey } from '../index.js';
// import formidable from 'formidable';
// import https from 'https';



// export const addPaymentGateway = async (request, response) => {
//     const paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
//     try {
//         const params = {
//             ...paytmParams,
//             'CHECKSUMHASH': paytmCheckSum
//         };
//         response.json(params);
//     } catch (error) {
//         console.log(error);
//     }
// }