import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90, flex: 1 },
	{
		field: 'firstName',
		headerName: 'First name',
		width: 150,
		editable: true,
		flex: 1
	},
	{
		field: 'lastName',
		headerName: 'Last name',
		width: 150,
		editable: true,
		flex: 1
	},
	{
		field: 'department',
		headerName: 'Department',
		width: 110,
		editable: true,
		flex: 1
	},
	{
		field: 'semester',
		headerName: 'Semester',
		width: 50,
		editable: true,
		flex: 1
	},

	{
		field: 'registration_no',
		headerName: 'Registration No',
		width: 250,
		editable: true,
		flex: 1
	},
	{
		field: 'roll_no',
		headerName: 'Roll No',
		width: 250,
		editable: true,
		flex: 1
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 250,
		editable: true,
		flex: 1
	},
	{
		field: 'mobile_no',
		headerName: 'Mobile No',
		width: 250,
		editable: true,
		flex: 1
	},
	{
		field: 'action',
		headerName: 'Action',
		width: 110,
		editable: true,
		flex: 1
	},
];

const TeacherStudents = () => {
	const [teachers, setTeachers] = useState([
		{ id: 1, lastName: 'Snow', firstName: 'Jon', department: "CSE", semester: "V", action: <a href="see_more">"See More"</a>},
		{ id: 2, lastName: 'Lannister', firstName: 'Cersei', department: "CSE", semester: "VI" },
		{ id: 3, lastName: 'Lannister', firstName: 'Jaime', department: "CSE", semester: "VI" },
		{ id: 4, lastName: 'Stark', firstName: 'Arya', department: "CSE", semester: "IV" },
		{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', department: "CSE", semester: "III" },
		{ id: 6, lastName: 'Melisandre', firstName: null, department: "CSE", semester: "III" },
		{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', department: "CSE", semester: "IV" },
		{ id: 8, lastName: 'Frances', firstName: 'Rossini', department: "CSE", semester: "VII" },
		{ id: 9, lastName: 'Roxie', firstName: 'Harvey', department: "CSE", semester: "VIII" },
	]);

	return (
		<div >
		<Box sx={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={teachers}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				slots={{ toolbar: GridToolbar}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
		<Button 
			color="primary" 
			variant='contained' 
			onClick={() =>{
				console.log("Button Clicked");
			}}
		>
			Add Students
		</Button>
		</div>
	)
};

export default TeacherStudents;