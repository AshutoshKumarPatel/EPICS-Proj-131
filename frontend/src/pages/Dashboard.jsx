import MainLayout from '../layouts/MainLayout';
import { useForm } from 'react-hook-form';
import api from '../api';
import { useEffect, useState } from 'react';

function Dashboard() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    // Send data to backend
    api.post('/predict/', data)
      .then(response => {
        console.log('Response:', response.data);
        const prediction = response.data.prediction;

        if (prediction < 0.61) {
          setMessage('User is not depressed at all.');
        } else if (prediction >= 0.61 && prediction <= 0.65) {
          setMessage('User might be stressed or going through something but can handle it on their own.');
        } else if (prediction > 0.7) {
          setMessage('User should seek a psychologist or some help.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    };
    
    useEffect(() => {
    }, [message]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 mt-24">
        <h1 className="text-3xl font-bold mb-16 text-center">Answer Simple Questions to Determine if You Are Depressed</h1>
        <form className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700 font-bold mb-2">Height</label>
            <input
              type="number"
              id="height"
              {...register('height', { required: true, min: 25, max: 220 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Your Height (in cms)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">Weight</label>
            <input
              type="number"
              id="weight"
              {...register('weight', { required: true, min: 29, max: 371 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Your Weight (in kgs)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
            <input
              type="text"
              id="age"
              {...register('age', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Your Age (in yrs)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="household_income" className="block text-gray-700 font-bold mb-2">Household Income</label>
            <select
              id="household_income"
              {...register('householdIncome', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            >
              <option value="">0 - 12</option>
              {[...Array(13).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="sleepHours" className="block text-gray-700 font-bold mb-2">Sleep hours</label>
            <select
              id="sleepHours"
              {...register('sleepHours', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            >
              <option value="">Select...</option>
              {[...Array(15).keys()].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="checkbox-group grid grid-cols-2 row-span-2">
            <div className="mb-4 grid place-items-center">
              <label htmlFor="memoryProblems" className="flex items-center text-gray-700 font-bold text-lg mb-2">
                <input
                  type="checkbox"
                  {...register('memoryProblems')}
                  className="mr-2 w-5 h-5"
                />
                Memory Problems
              </label>
            </div>
            <div className="mb-4 grid place-items-center">
              <label htmlFor="cantWork" className="flex items-center text-gray-700 font-bold text-lg mb-2">
                <input
                  type="checkbox"
                  {...register('cantWork')}
                  className="mr-2 w-5 h-5"
                />
                Can&apos;t work
              </label>
            </div>
            <div className="mb-4 grid place-items-center">
              <label htmlFor="sleepingHistory" className="flex items-center text-gray-700 font-bold text-lg mb-2">
                <input
                  type="checkbox"
                  {...register('sleepingHistory')}
                  className="mr-2 w-5 h-5"
                />
                Trouble sleeping history
              </label>
            </div>
            <div className="mb-4 grid place-items-center">
              <label htmlFor="limitedWork" className="flex items-center text-gray-700 font-bold text-lg mb-2">
                <input
                  type="checkbox"
                  {...register('limitedWork')}
                  className="mr-2 w-5 h-5"
                />
                Limited work
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="outOfWork" className="block text-gray-700 font-bold mb-2">Out of work</label>
            <select
              id="outOfWork"
              {...register('outOfWork', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            >
              <option value="">Select...</option>
              <option value="Retired">Retired</option>
              <option value="Disabled">Disabled</option>
              <option value="Home Caretaker">Home Caretaker</option>
              <option value="School">School</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
              <option value="Layoff">Layoff</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="prescriptionCount" className="block text-gray-700 font-bold mb-2">Prescription count</label>
            <input
              type="number"
              id="prescriptionCount"
              {...register('prescriptionCount', { required: true, min: 0, max: 23 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="0 - 23"
            />
          </div>
          <div className="col-span-3 sm:col-span-2">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </div>
        </form>
      </div>
      <h2 className='text-center text-2xl font-bold'>{message}</h2>
    </MainLayout>
  );
}

export default Dashboard;
