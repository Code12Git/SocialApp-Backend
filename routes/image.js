import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const imagePath = path.join(__dirname, "../images");

export const serveImages = express.static(imagePath);
