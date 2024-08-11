import React from 'react';
import { Button } from '../../components/ui/button';

const BuyerDetailList = ({ buyingDetails, onClose }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Buyer Details</h2>
      {buyingDetails.length === 0 ? (
        <p>No buyers yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                {/* <th className="px-4 py-2 border-b-2 border-gray-200 text-left">Item</th> */}
                <th className="px-4 py-2 border-b-2 border-gray-200 text-left">Quantity</th>
                <th className="px-4 py-2 border-b-2 border-gray-200 text-left">Buyer</th>
                <th className="px-4 py-2 border-b-2 border-gray-200 text-left">address</th>
              </tr>
            </thead>
            <tbody>
              {buyingDetails.map((detail, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {/* <td className="px-4 py-2 border-b border-gray-200">{detail.itemName}</td> */}
                  <td className="px-4 py-2 border-b border-gray-200">{detail.quantity}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{detail.buyerName}</td>
                  <td className="px-4 py-2 border-b border-gray-200">{detail.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
        Close
      </Button>
    </div>
  );
};

export default BuyerDetailList;
