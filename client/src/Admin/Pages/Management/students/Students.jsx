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
		field: 'course',
		headerName: 'Course',
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

const Students = () => {
	const [teachers, setTeachers] = useState([
		{ id: 'CUCSEMS11', lastName: 'Snow', firstName: 'Jon', department: "CSE", course: 'M.Tech',semester: "1st", registration_no: '133-1111-0011-23', roll_no: '97/CSM/211001'},
		{ id: 'CUCSEMS12', lastName: 'Lannister', firstName: 'Cersei', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0012-23', roll_no: '97/CSM/211002' },
		{ id: 'CUCSEMS13', lastName: 'Lannister', firstName: 'Jaime', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0013-23', roll_no: '97/CSM/211003' },
		{ id: 'CUCSEMS14', lastName: 'Stark', firstName: 'Arya', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0014-23', roll_no: '97/CSM/211004' },
		{ id: 'CUCSEMS15', lastName: 'Targaryen', firstName: 'Daenerys', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0015-23', roll_no: '97/CSM/211005'  },
		{ id: 'CUCSEMS16', lastName: 'Melisandre', firstName: 'Neli', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0016-23', roll_no: '97/CSM/211006'  },
		{ id: 'CUCSEMS17', lastName: 'Clifford', firstName: 'Ferrara', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0017-23', roll_no: '97/CSM/211007'  },
		{ id: 'CUCSEMS18', lastName: 'Frances', firstName: 'Rossini', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0018-23', roll_no: '97/CSM/211008' },
		{ id: 'CUCSEMS19', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "1st", registration_no: '133-1111-0019-23', roll_no: '97/CSM/211009' },
		{ id: 'CUCSEMS21', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0021-22', roll_no: '97/CSM/211011' },
		{ id: 'CUCSEMS22', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0022-22', roll_no: '97/CSM/211012' },
		{ id: 'CUCSEMS23', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0023-22', roll_no: '97/CSM/211013' },
		{ id: 'CUCSEMS24', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0024-22', roll_no: '97/CSM/211014' },
		{ id: 'CUCSEMS25', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0025-22', roll_no: '97/CSM/211015' },
		{ id: 'CUCSEMS26', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0026-22', roll_no: '97/CSM/211016' },
		{ id: 'CUCSEMS27', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0027-22', roll_no: '97/CSM/211017' },
		{ id: 'CUCSEMS28', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0028-22', roll_no: '97/CSM/211018' },
		{ id: 'CUCSEMS29', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0029-22', roll_no: '97/CSM/211019' },
		{ id: 'CUCSEMS210', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0030-22', roll_no: '97/CSM/211020' },
		{ id: 'CUCSEMS211', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0031-22', roll_no: '97/CSM/211021' },
		{ id: 'CUCSEMS212', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0032-22', roll_no: '97/CSM/211022' },
		{ id: 'CUCSEMS213', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0033-22', roll_no: '97/CSM/211023' },
		{ id: 'CUCSEMS214', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0034-22', roll_no: '97/CSM/211024' },
		{ id: 'CUCSEMS215', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0035-22', roll_no: '97/CSM/211025' },
		{ id: 'CUCSEMS216', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0036-22', roll_no: '97/CSM/211026' },
		{ id: 'CUCSEMS217', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0037-22', roll_no: '97/CSM/211027' },
		{ id: 'CUCSEMS218', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0038-22', roll_no: '97/CSM/211028' },
		{ id: 'CUCSEMS219', lastName: 'Roxie', firstName: 'Harvey', department: "CSE", course: 'M.Tech', semester: "2nd", registration_no: '133-1111-0039-22', roll_no: '97/CSM/211029' },
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

export default Students;