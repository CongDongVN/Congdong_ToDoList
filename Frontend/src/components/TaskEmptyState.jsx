import React from 'react'
import { Card } from './ui/card';
import { Circle } from 'lucide-react';

const TaskEmptyState = ({filter}) => {
  return (
    <Card
    className="p-8 text-center border-0 bg-gradient-card shadow-custom-md">
        <div className="space-y-3">
          <Circle className="mx-auto size-12 text-muted-foreground" />
          <div>
            <h3 className="font-medium text-foreground">
              {
                filter ==="active" ?
                "No active tasks" :
                filter === "completed" ?
                "No completed tasks" :
                "No tasks available"
              }
            </h3>

            <p className="text-sm text-muted-foreground">
              {filter ==="all"? "Create a new task to get started!" :
              `Switch to all to see the tasks ${filter === "active" ? "Done": "In Progress"}`
              }
            </p>
          </div>
        </div>
    </Card>
  );
  
};

export default TaskEmptyState