'use client'

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const XLSXToJSONConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target?.result;
        if (data) {
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(sheet, { header: 1 }); 
          processJsonData(json);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const processJsonData = (data: any[]) => {
    const formattedData = data.slice(1).map((row) => ({
      packageNumber: row[0] || '',
      senderName: row[1] || '',
      senderPhoneNumber: row[2] || '',
      receiverName: row[3] || '',
      receiverPhoneNumber: row[4] || '',
      quantity: row[5] || 0,
      weight: row[6] || 0,
      volume: row[7] || 0,
      cost: row[8] || 0,
      status: row[9] || '',
      destination: row[10] || '',
    }));
    setJsonData(formattedData);
  };

  return (
    <div>
      <h1>XLS to JSON Converter</h1>
      <input type="file" accept=".xls, .xlsx" onChange={handleFileUpload} />
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default XLSXToJSONConverter;
