import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import "../Css/AddModal.css";

export default function AddModal({ info }) {
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    const initialFormData = {};
    info.forEach(({ headerName }) => {
      initialFormData[headerName] = '';
    });
    setFormData(initialFormData);
    setOpen(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        onClick={handleOpenModal}
        variant="contained"
        color="primary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        className="bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
      >
        Agregar
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-box">
          <h2
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="text-2xl font-bold mb-5 text-center uppercase text-blue-400"
          >
            Agregar Registro
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            {info.map(({ headerName }) => (
              <div key={headerName}>
                <TextField
                  label={headerName}
                  name={headerName}
                  value={formData[headerName]}
                  onChange={handleInputChange}
                  variant="outlined"
                  fullWidth
                  className="w-full"
                />
              </div>
            ))}
            <Button
              type="submit"
              variant="contained"
              color="success"
              startIcon={<FontAwesomeIcon icon={faSave} />}
              className="bg-green-500 hover:bg-green-600 transition-colors duration-300 mt-4"
            >
              Crear
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
