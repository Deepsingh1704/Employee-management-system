import Header from "../../others/Header";
const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />

      <div>
        <form>
          <h3>Task</h3>
          <input type="text" placeholder="New Task" />
          <h3>Description</h3>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <h3>Date</h3>
          <input type="date" />
          <h3>Assign To</h3>
          <input type="text" placeholder="employee name" />
          <h3>Catagory</h3>
          <input type="text" placeholder="design, dev, etc" />
          <button>Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
