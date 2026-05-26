const ManageServices = () => {
  const fakeData = [
    { user: "alice@example.com", service: "Wedding Decoration" },
    { user: "bob@example.com", service: "Birthday Party Decoration" },
    { user: "charlie@example.com", service: "Corporate Event Decoration" },
    { user: "diana@example.com", service: "Anniversary Decoration" },
    { user: "edward@example.com", service: "Festival Decoration" },
    { user: "fiona@example.com", service: "Home Interior Decoration" },
    { user: "george@example.com", service: "Garden Party Decoration" },
    { user: "hannah@example.com", service: "Stage & Event Decoration" },
    { user: "ian@example.com", service: "Exhibition Decoration" },
    { user: "julia@example.com", service: "Themed Party Decoration" },
  ];
  return (
    <table className='min-w-full overflow-hidden'>
      <thead className='bg-base-300'>
        <tr>
          <th className=' px-4 py-2 text-left w-fit'>No.</th>
          <th className=' px-4 py-2 text-left'>Decoration Service</th>
          <th className=' px-4 py-2 text-left'>User Email</th>
          <th className=' px-4 py-2 text-center'>Action</th>
          <th className=' px-4 py-2 text-center'>Status</th>
        </tr>
      </thead>
      <tbody>
        {fakeData.map((single, index) => (
          <tr key={index} className='hover:bg-base-200'>
            <td className=' px-4 py-2 w-fit'>
              {String(index + 1).padStart(2, "0")}
            </td>
            <td className=' px-4 py-2'>{single.service}</td>
            <td className=' px-4 py-2'>{single.user}</td>
            <td className=' px-4 py-2 flex gap-5 justify-center'>
              <button className='btn btn-success'>Approve</button>
              <button className='btn btn-error'>Remove</button>
            </td>
            <td className=' px-4 py-2'>
              <div className='flex items-center gap-2.5 justify-center'>
                <div aria-label='status' class='status status-primary'></div>
                Pending
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ManageServices;
