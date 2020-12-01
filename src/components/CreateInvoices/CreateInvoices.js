import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';
import InvoicePreview from '../InvoicePreview/InvoicePreview';
import './CreateInvoices.css';
const CreateInvoices = () => {
  const [newInvoice, setNewInvoice] = useState({
    name: '',
    des: '',
    unit: '',
    qty: '',
    price: '',
    discount: '',
    tax: '',
  });
  const handleChange = e => {
    newInvoice[e.target.name] = e.target.value;
    setNewInvoice(newInvoice);
  };
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleAddInvoice = () => {
    console.log(newInvoice);
    handleShow();
  };

  return (
    <section className='createInvoices mt-5'>
      <div className='invoiceContainer'>
        <h2 className='text-dark'>Add New Invoices</h2>
        <div className='row text-dark'>
          <Table responsive borderless>
            <thead>
              <tr>
                <th>No</th>
                <th>Item Name</th>
                <th>Unit </th>
                <th>Quantity </th>
                <th>Price</th>
                <th>Discount %</th>
                <th>Tax </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <Form.Control
                    style={{ maxWidth: '15rem' }}
                    type='text'
                    name='name'
                    placeholder='Item Name'
                    onBlur={handleChange}
                  />
                  <Form.Control
                    as='textarea'
                    name='des'
                    rows={3}
                    placeholder='Description'
                    onBlur={handleChange}
                  />
                </td>
                <td>
                  <Form.Control as='select' name='unit' onChange={handleChange}>
                    <option className='text-dark'>Select Unit</option>
                    <option className='text-dark'>KG</option>
                    <option className='text-dark'>Liter</option>
                  </Form.Control>
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='qty'
                    placeholder='Quantity'
                    onBlur={handleChange}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='price'
                    placeholder='Price'
                    onBlur={handleChange}
                  />
                </td>
                <td>
                  <Form.Control
                    type='number'
                    name='discount'
                    placeholder='discount'
                    onBlur={handleChange}
                  />
                </td>
                <td className='d-flex'>
                  <Form.Control as='select' name='tax' onChange={handleChange}>
                    <option className='text-dark'>Select Tax %</option>
                    <option className='text-dark'>15</option>
                    <option className='text-dark'>25</option>
                  </Form.Control>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <button className='buttonElement' onClick={handleAddInvoice}>
          Add Invoice
        </button>
        {
          <InvoicePreview
            show={show}
            handleClose={handleClose}
            newInvoice={newInvoice}
          />
        }
        {newInvoice.name && (
          <p className='text-center text-success'>
            Invoice Create successfully
          </p>
        )}
      </div>
    </section>
  );
};

export default CreateInvoices;
