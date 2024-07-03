import axios from "axios";
import * as XLSX from "xlsx";

interface ParsedData {
  [key: string]: string | number;
}

export const parseExcel = async (url: string): Promise<ParsedData[]> => {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const data = new Uint8Array(response.data);
  const workbook = XLSX.read(data, { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const jsonData = XLSX.utils.sheet_to_json(sheet);
  return jsonData as ParsedData[];
};
