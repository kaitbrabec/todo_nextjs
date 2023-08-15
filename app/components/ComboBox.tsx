import React, { useState, useEffect } from 'react';
import { Combobox } from '@headlessui/react';
import { updateTaskStatus } from '@/api';
import { ITask } from '@/types/tasks';

interface MyComboboxProps {
  taskId: string;
  initialSelectedStatus: ITask['status'];
}

const MyCombobox: React.FC<MyComboboxProps> = ({ taskId, initialSelectedStatus }) => {
  const [selectedStatus, setSelectedStatus] = useState(initialSelectedStatus);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setSelectedStatus(initialSelectedStatus);
  }, [initialSelectedStatus]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const statusOptions = ['New', 'In Progress', 'Blocked', 'Completed'];

  const filteredStatusOptions = query === ''
    ? statusOptions
    : statusOptions.filter(status => status.toLowerCase().includes(query.toLowerCase()));

  const handleStatusChange = async (newStatus: string) => {
    setSelectedStatus(newStatus);
    await updateTaskStatus(taskId, newStatus);
  };

  return (
    <Combobox value={selectedStatus} onChange={handleStatusChange}>
      <Combobox.Input onChange={handleInputChange} />
      <Combobox.Options>
        {filteredStatusOptions.map(status => (
          <Combobox.Option key={status} value={status}>
            {status}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
};

export default MyCombobox;

