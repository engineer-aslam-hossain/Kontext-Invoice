import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import './InvoicePreview.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const InvoicePreview = ({ show, handleClose, newInvoice }) => {
  const { name, des, unit, qty, price, discount, tax } = newInvoice;
  const totalUnitPrice = parseInt(qty * price);
  const priceWithDiscount = totalUnitPrice - (totalUnitPrice * discount) / 100;
  const priceWithTax =
    priceWithDiscount + (priceWithDiscount * parseInt(tax)) / 100;

  const handleSubmit = e => {
    e.preventDefault();
    const input = document.getElementById('modal');
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'mm', [297, 210]);
      //   const pdf = new jsPDF();

      pdf.addImage(imgData, 'JPEG', 80, 30, 0);
      pdf.save('invoices.pdf');
    });
  };
  return (
    <div>
      <Modal show={show} onHide={handleClose} id='modal'>
        <Modal.Header className='d-block'>
          <Modal.Title className='modalHeader text-dark text-center'>
            Invoices Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            onSubmit={handleSubmit}
            className='ModalForm d-flex flex-column'>
            <div className='invoicesDetails'>
              <div className='infoTitle'>
                <p>Item Name :</p>
                <p>Description :</p>
                <p>Quantity :</p>
                <p>Price :</p>
                <p>Discount :</p>
                <p>Tax :</p>
                <p>Total with discount : </p>
                <p>Total With Tax :</p>
              </div>
              <div className='infoDetails'>
                <p>{name || 'demo'}</p>
                <p>{des || 'demo'}</p>
                <p>
                  {qty || 0}
                  {unit}
                </p>
                <p>{price || 0}</p>
                <p>{discount || 0} %</p>
                <p>{tax || 0} %</p>
                <p>{priceWithDiscount || 0}</p>
                <p>{priceWithTax || 0}</p>
              </div>
            </div>

            <button className='buttonElement' type='submit'>
              Save Pdf
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default InvoicePreview;
