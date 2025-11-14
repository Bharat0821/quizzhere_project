import React from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'

const Dashboard = () => {
  return (
    <div className=' mt-20  ml-15 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 mr-24'>
      <Card>
        <CardHeader>
          <CardTitle>Quizzes Created</CardTitle>
        </CardHeader>
      </Card>
   </div>
  )
}

export default Dashboard
