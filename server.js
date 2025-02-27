const express = require("express");
const ExcelJS = require("exceljs");
const cors = require("cors");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const filePath = "C:/Users/shukl/Documents/contact_data.xlsx"; // Change this to where you want the Excel file

app.post("/saveData", async (req, res) => {
    const { name, email, phone, message } = req.body;
    
    let workbook;
    if (fs.existsSync(filePath)) {
        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
    } else {
        workbook = new ExcelJS.Workbook();
        const sheet = workbook.addWorksheet("Contacts");
        sheet.columns = [
            { header: "Name", key: "name", width: 20 },
            { header: "Email", key: "email", width: 30 },
            { header: "Phone", key: "phone", width: 15 },
            { header: "Message", key: "message", width: 50 },
            { header: "Date", key: "date", width: 20 }
        ];
    }

    const sheet = workbook.getWorksheet("Contacts");
    sheet.addRow({ name, email, phone, message, date: new Date().toLocaleString() });

    await workbook.xlsx.writeFile(filePath);
    res.json({ success: true, message: "Data saved to Excel!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
