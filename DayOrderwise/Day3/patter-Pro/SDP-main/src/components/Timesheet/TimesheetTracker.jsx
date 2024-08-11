import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { motion } from 'framer-motion';

const timesheetData = [
  { date: '2023-07-01', task: 'Develop UI', hours: 5 },
  { date: '2023-07-02', task: 'Code Review', hours: 3 },
  { date: '2023-07-03', task: 'Testing', hours: 4 },
  { date: '2023-07-04', task: 'Bug Fixes', hours: 2 },
];

const TimesheetTracker = () => {
  return (
    <motion.div className="card transform hover:-translate-y-2 transition-transform duration-300">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Timesheet Tracker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table >
              <thead>
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Task</th>
                  <th className="px-4 py-2">Hours</th>
                </tr>
              </thead>
              <tbody>
                {timesheetData.map((entry, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2">{entry.date}</td>
                    <td className="px-4 py-2">{entry.task}</td>
                    <td className="px-4 py-2">{entry.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TimesheetTracker;
