import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { formatDate } from '../../../Services/formatDate';

function CourseTable({courses,setCourses}) {
  return (
    <div className='w-full border border-richblack-700 pb-6 rounded-lg px-4 mt-6'>
        <Table >
            <Thead>
                <Tr>
                  <div className='w-full text-richblack-5 border-b border-richblack-700 pb-3  flex justify-between items-center mt-4'>
                    <Th><p className='font-medium'>COURSES</p></Th>
                    <div className='flex items-center gap-x-8'>
                        <Th><p className='font-medium'>DURATION</p></Th>
                        <Th><p className='font-medium'>PRICE</p></Th>
                        <Th><p className='font-medium'>ACTIONS</p></Th>
                    </div>
                  </div>
                </Tr>
            </Thead>
            {
                courses.length === 0 ?
                (
                    <Tbody>
                        <Tr>
                            <Th>No Course is Present</Th>
                        </Tr>
                    </Tbody>
                )
                :
                (
                 
                    courses.map((course)=>{
                        return(
                          
                              <Tbody key={course._id}>
                                <div className='mt-4 border-b border-richblack-700 pb-4'>
                                    <Tr>
                                        <Th>
                                        <div className='flex items-start gap-x-2'>
                                            <div>
                                                <img src={course.thumbnail} className='w-[180px] h-[100px] rounded-lg'/>
                                                </div>
                                                <div className='flex items-start flex-col gap-y-1 text-richblack-25 font-inter font-medium'>
                                                    <p>{course.courseName}</p>
                                                    <p className='text-richblack-200 text-sm'>{course.courseDescription}</p>
                                                    <p>Created:</p>
                                                    <p>
                                                        {
                                                            course.status === "Draft"?
                                                            (
                                                                <p>Drafted</p>
                                                            )
                                                            :
                                                            (
                                                                <p>Published</p>
                                                            )
                                                        }
                                                    </p>
                                                </div>
                                        </div>
                                        </Th>
                                    </Tr>
                                </div>
                              </Tbody>
                           
                        )
                    })
                 
                )
            }

        </Table>
    </div>
  )
}

export default CourseTable