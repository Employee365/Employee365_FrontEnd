export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {filed:"user",headerName:'user',width:230, renderCell:(params)=>{
        return(
            <div className='flex items-center'>
                <img src={params.row.avatar} alt="avatar" className="w-[32px] h-[32px] rounded-full object-cover mr-[20px]" />
                {params.row.username}
            </div>
        )
    }},
    {field:'email',headerName:'email',width:100},
    {field:'projectTitle',headerName:'Title',width:100},
    {field:'role',headerName:'Role',width:100},
    {field:'status',headerName:'Status',width:100},
    {field:'deadline',headerName:'Deadline',width:100},
]
export const taskColumns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {filed:"avatar",headerName:'User',width:50, renderCell:(params)=>{
      return(
          <div className='flex items-center'>
              <img src={params.row.avatar} alt="avatar" className="w-[32px] h-[32px] rounded-full object-cover mr-[20px]" />
              {params.row.username}
          </div>
      )
  }},
    { field: 'assignedTo', headerName: 'Assigned To', width: 150 },
    {field:'taskName',headerName:'Title',width:100},
    {field:'startDate',headerName:'StartDate',width:100},
    {field:'endDate',headerName:'endDate',width:100},

    {field:'role',headerName:'Role',width:100},
    {field:'status',headerName:'Status',width:100},
    {field:'deadline',headerName:'Deadline',width:100},
]

export const userData = [
    {
      name: "Jan",
      "Active User": 4000,
    },
    {
      name: "Feb",
      "Active User": 3000,
    },
    {
      name: "Mar",
      "Active User": 5000,
    },
    {
      name: "Apr",
      "Active User": 4000,
    },
    {
      name: "May",
      "Active User": 3000,
    },
    {
      name: "Jun",
      "Active User": 2000,
    },
    {
      name: "Jul",
      "Active User": 4000,
    },
    {
      name: "Agu",
      "Active User": 3000,
    },
    {
      name: "Sep",
      "Active User": 4000,
    },
    {
      name: "Oct",
      "Active User": 1000,
    },
    {
      name: "Nov",
      "Active User": 4000,
    },
    {
      name: "Dec",
      "Active User": 3000,
    },
  ];

  export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];

  export const userRows = [
    {
      id: 1,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      role: "Marketing",
      activity: "5 mins ago",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jojhdrhgjsdngdvbsdgbhjdhjdgbhn@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
    {
      id: 10,
      username: "Jon Snow",
      avatar:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      projectTitle:'Fix Front End Issue',
      transaction: "$120.00",
    },
  ];

  export const productRows = [
    {
      id: 1,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 2,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 3,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 4,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 5,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 6,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 7,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 8,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 9,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
    {
      id: 10,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      projectTitle:'Fix Front End Issue',
      price: "$120.00",
    },
  ];