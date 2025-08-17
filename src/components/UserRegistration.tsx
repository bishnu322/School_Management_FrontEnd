import Input from "../shared/DesignSystem/input/Input";
import DropDown from "./DropDown";

const UserRegistration = () => {
  return (
    <div>
      <form>
        <div className="flex px-5 py-3 gap-3 justify-between flex-wrap">
          <Input
            id="firstName"
            type="text"
            placeholder="First Name"
            label="First Name"
          />

          <Input
            id="lastName"
            type="text"
            placeholder="Last Name"
            label="Last Name"
          />
          <Input
            id="email"
            type="email"
            placeholder="example@gmail.com"
            label="Email"
          />
          <Input
            id="phoneNumber"
            type="number"
            placeholder="0000000000"
            label="Phone Number"
          />
          <Input
            id="dateOfBirth"
            type="date"
            placeholder="dd-mm-yyyy"
            label="Date of Birth"
          />
          {/* <div>
            <MyDatePicker />
          </div> */}

          <Input
            id="address"
            type="text"
            placeholder="Address"
            label="Address"
          />
          <Input
            id="gender"
            type="text"
            placeholder="Male | Female | Others"
            label="Gender"
          />
          <Input
            id="image"
            type="file"
            placeholder="choose file"
            label="Photo"
          />

          <Input
            id="classId"
            type="text"
            placeholder="Class..."
            label="Class"
          />

          <Input
            id="rollNumber"
            type="text"
            placeholder="Roll number"
            label="Roll Number"
          />

          {/* <Input id="role" type="text" placeholder="Role" label="Role" /> */}
          <DropDown />
          <div className="flex justify-center items-center mt-6">
            <button className=" flex px-23 py-2 text-md rounded cursor-pointer bg-violet-600 font-bold transition-all duration-500 hover:bg-green-500 hover:text-green-900 ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegistration;
