import React from "react";
import * as xlsx from "xlsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function ExcelDownload({ info }) {
  const downloadExcel = () => {
    const worksheet = xlsx.utils.json_to_sheet(info);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Vehículos");
    const excelBuffer = xlsx.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const fileURL = URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "vehiculos.xlsx";
    link.click();
  };

  return (
    <div className="mt-8 mx-4">
      <button
        className={`font-bold py-2 px-4 rounded ${info && info.length > 0 ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-400 cursor-not-allowed text-gray-200'}`}
        onClick={info && info.length > 0 ? downloadExcel : null}
        disabled={!info || info.length === 0}
      >
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Descargar Excel
      </button>
    </div>
  );
}
