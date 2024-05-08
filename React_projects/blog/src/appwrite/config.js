import conf from '../conf/conf.js'; 
import { Client, Databases,Storage,Query, ID } from "appwrite";

export class  Service {
    client = new Client();
    database = new Databases();
    bucket = new Storage();
    constructor () {
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectId);
        this.database = new Databases();
        this.bucket = new Storage();
    }


    async createPost ({title, slug, content, featuredImg, status, userId}){
        try {
           return await this.createDocument(
            conf.appwriteCollectionId, 
            conf.appwriteDatabaseId, 
            slug, {
                title,
                content, 
                featuredImg,
                status, 
                userId
            }
           )
        } catch (error) {
            console.log("error in the createPost", error)
        }
    }


    async updatePost (slug, {title, content, featuredImg, status}){
        try {
            return await this.database.updateDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug, 
                {
                    title, 
                    content, 
                    featuredImg, 
                    status
                }
            )
        } catch (error) {
            console.log('error in updata post', error)
        }

    }
    
    async deletePost (slug){
        try {
            await this.database.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug
            )
            return true
        } catch (error) {
            console.log('error in deletePost', error)
            return false
        }
    }

    async getPost (slug) {
        try {
            return await this.database.getDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId, 
                slug
            )
        } catch (error) {
            console.log("error in getpost", error)
        }
    }


    async getPosts (queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log('error in getposts', error);
            return false
        }
    }

    // file uploading services 


    async uploadFile (file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId, 
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log('error in uplaodFile', error); 
            return false;
        }
    }


    async deleteFile (fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId, 
                fileId
            );
            return true;
        } catch (error) {
            console.log('error in deleteFile', error); 
            return false
        }
    }
    

    getFilePreview (fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId, 
            fileId
        )
    }

}


const service = new Service(); 
export default service;