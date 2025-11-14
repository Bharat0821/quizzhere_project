import React from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "HTML",
    paymentStatus: "Published",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "CSS",
    paymentStatus: "Published",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "JavaScript",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "JavaScript",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },

]

const QuizzesTable = () => {
    const navigate = useNavigate();
  return (
      <div className=' mt-20  ml-15 flex flex-col sm:flex-flex-2 lg:grid-cols-3 p-5 mr-24'>
        <div>
        <Button onClick={() => navigate("/admin/quizzes/create")}> Add Quizzes </Button>
        </div>
        <div className='overflow-x-auto w-2xl py-20'>
        <div> Quizzes Published</div>
        <div>
            <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>

        </div>
    
        </div>
       
   </div>
  )
}

export default QuizzesTable
