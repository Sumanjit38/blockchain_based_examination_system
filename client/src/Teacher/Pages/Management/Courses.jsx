import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';

const columns = [
	{ field: 'id', headerName: 'ID', width: 90, flex: 1 },
	
	{
		field: 'courses',
		headerName: 'Courses',
		width: 110,
		editable: true,
		flex: 1
	},
	
];

const Courses = () => {
	const [teachers, setTeachers] = useState([
		{ id: 1, courses: "B.Tech" },
		{ id: 2, courses: "M.Sc" },
		{ id: 3, courses: "M.Tech" },
		
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
		
		</div>
	)
};

export default Courses;