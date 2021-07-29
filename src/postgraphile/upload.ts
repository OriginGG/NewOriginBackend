import { v2 as cloudinary } from 'cloudinary'
import { cloud_name, api_key, api_secret } from '../../config/cloudinary'

cloudinary.config({
	cloud_name,
	api_key,
	api_secret,
});

export default async function ({ createReadStream }) {
	return new Promise((resolve, reject) => {
		const cloudinaryStream = cloudinary
			.uploader
			.upload_stream(function(error, result) { 
				if (error) {
					console.error(error)
					reject(error)
				} else if (result) {
					console.log(result)
					resolve(result.url)	
				}
			});
		const fileUploadStream = createReadStream()
		fileUploadStream	
			.on("error", error => {
				console.error(error)
				reject(error)
			})
			.pipe(cloudinaryStream)
		});
}
