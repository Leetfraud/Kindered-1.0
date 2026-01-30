import { useState } from "react";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Medication from "./components/Medication";
import Emergency from "./components/Emergency";
import Calendar from "./components/Calendar";
import GroceryList from "./components/GroceryList";
import RequestHelper from "./components/RequestHelper";
import AddEvent from "./components/AddEvent";
import TasksList from "./components/TasksList";
import MedicineOrder from "./components/MedicineOrder";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderTracking from "./components/OrderTracking";
import VoiceAssistant from "./components/VoiceAssistant";
import FamilyPostcards from "./components/FamilyPostcards";
import AddNewAddress from "./components/AddNewAddress";
import AccessibilitySettings from "./components/AccessibilitySettings";
import AddNewTask from "./components/AddNewTask";

export type Screen =
  | "splash"
  | "login"
  | "dashboard"
  | "cart"
  | "profile"
  | "medication"
  | "emergency"
  | "calendar"
  | "groceryList"
  | "requestHelper"
  | "addEvent"
  | "tasks"
  | "medicineOrder"
  | "orderConfirmation"
  | "orderTracking"
  | "voiceAssistant"
  | "familyPostcards"
  | "addNewAddress"
  | "accessibilitySettings"
  | "addNewTask";

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<Screen>("splash");
  const [medicationStates, setMedicationStates] = useState({
    morning: false,
    bloodPressure: true,
  });

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Bananas",
      price: 3.99,
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200",
    },
    {
      id: 2,
      name: "Whole Wheat Bread",
      price: 4.49,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200",
    },
    {
      id: 3,
      name: "Organic Milk",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200",
    },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, text: "Water the plants", completed: false },
    { id: 2, text: "Call Grandson", completed: false },
    { id: 3, text: "Take afternoon walk", completed: false },
  ]);

  const navigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const takeMedication = (
    medicationId: "morning" | "bloodPressure",
  ) => {
    setMedicationStates((prev) => ({
      ...prev,
      [medicationId]: true,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== itemId),
    );
  };

  const toggleTask = (taskId: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "splash":
        return <Splash navigate={navigate} />;
      case "login":
        return <Login navigate={navigate} />;
      case "dashboard":
        return <Dashboard navigate={navigate} />;
      case "cart":
        return (
          <Cart
            navigate={navigate}
            cartItems={cartItems}
            removeFromCart={removeFromCart}
          />
        );
      case "profile":
        return <Profile navigate={navigate} />;
      case "medication":
        return (
          <Medication
            navigate={navigate}
            medicationStates={medicationStates}
            takeMedication={takeMedication}
          />
        );
      case "emergency":
        return <Emergency navigate={navigate} />;
      case "calendar":
        return <Calendar navigate={navigate} />;
      case "groceryList":
        return (
          <GroceryList
            navigate={navigate}
            cartItemCount={cartItems.length}
          />
        );
      case "requestHelper":
        return <RequestHelper navigate={navigate} />;
      case "addEvent":
        return <AddEvent navigate={navigate} />;
      case "tasks":
        return (
          <TasksList
            navigate={navigate}
            tasks={tasks}
            toggleTask={toggleTask}
          />
        );
      case "medicineOrder":
        return <MedicineOrder navigate={navigate} />;
      case "orderConfirmation":
        return <OrderConfirmation navigate={navigate} />;
      case "orderTracking":
        return <OrderTracking navigate={navigate} />;
      case "voiceAssistant":
        return <VoiceAssistant navigate={navigate} />;
      case "familyPostcards":
        return <FamilyPostcards navigate={navigate} />;
      case "addNewAddress":
        return <AddNewAddress navigate={navigate} />;
      case "accessibilitySettings":
        return <AccessibilitySettings navigate={navigate} />;
      case "addNewTask":
        return <AddNewTask navigate={navigate} />;
      default:
        return <Dashboard navigate={navigate} />;
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F5F5F0" }}
    >
      {renderScreen()}
    </div>
  );
}