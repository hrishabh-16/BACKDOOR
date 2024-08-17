// SERVICES :: APPLICATION
// IMPORTING THE REQURIED MODULES IN THE WORK DIRECTORY 
import express,{ Application } from "express";
import bodyParser from "body-parser";
import path from 'path';

// IMPORTING ROUTES 
import { AdminRoute } from "../routes/Admin/AdminRoute";
import { VandorRoute } from "../routes/Vandor/VandorRoute";
import { ShoppingRoute } from "../routes/Shopping/ShoppingRoute";

// EXPORTING AS DEFAULT 
export default async(app: Application) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded( {extended: true} ));
    app.use('/images', express.static(path.join(__dirname, 'images')));

    // ROUTING 
    app.use('/admin', AdminRoute);
    app.use('/vandor', VandorRoute);
    app.use(ShoppingRoute);

    return app;
}