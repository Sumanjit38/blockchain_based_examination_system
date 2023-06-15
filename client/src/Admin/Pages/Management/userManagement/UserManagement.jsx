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
		field: 'email',
		headerName: 'Email',
		width: 150,
		editable: true,
		flex: 1
	},
	{
		field: 'mobile_no',
		headerName: 'Mobile No',
		width: 150,
		editable: true,
		flex: 1
	},
	
];

const UserManagement = () => {
	const [teachers, setTeachers] = useState([
		{ id: 'CUCSEA1', lastName: 'Setua', firstName: 'Sanjit', department: "CSE" },
		{ id: 'CUCSEA2', lastName: 'Chaki', firstName: 'Nabendu', department: "CSE" },
		{ id: 'CUCSEA3', lastName: 'Das', firstName: 'Sovonesh', department: "CSE" },
		/*{ id: 4, lastName: 'Stark', firstName: 'Arya', department: "CSE" },
		{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', department: "CSE" },
		{ id: 6, lastName: 'Melisandre', firstName: null, department: "CSE" },
		{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', department: "CSE" },
		{ id: 8, lastName: 'Frances', firstName: 'Rossini', department: "CSE" },
		{ id: 9, lastName: 'Roxie', firstName: 'Harvey', department: "CSE" },*/
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
			Add Admins
		</Button>
		</div>
	)
};

export default UserManagement;