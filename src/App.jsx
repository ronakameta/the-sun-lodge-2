import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyle";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import Account from "./pages/Account";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingId" element={<Booking />} />
              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeProvider>
  );
}

export default App;

// import styled from "styled-components";
// import GlobalStyles from "./styles/GlobalStyle";
// import Button from "./ui/Button";
// import Heading from "./ui/Heading";
// import Row from "./ui/Row";

// const Input = styled.input`
//   padding: 0.8rem 1.2rem;
//   border: 1px solid var(--color-grey-300);
//   background-color: var(--color-grey-0);
//   border-radius: var(--border-radius-sm);
//   box-shadow: var(--shadow-sm);
// `;

// const StyledApp = styled.div`
//   /* background-color: gray; */
// `;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row type="vertical">
//           <Row type="horizontal">
//             <Heading as="h1">The Sun Lodge</Heading>
//             <div>
//               <Heading as="h2">Check In and out</Heading>
//               <Button>Check In</Button>
//               <Button variation="secondary" size="medium">
//                 Check Out
//               </Button>
//             </div>
//           </Row>
//           <Row type="vertical">
//             <Heading as="h3">Form</Heading>
//             <form>
//               <Input placeholder="Enter Name"></Input>
//               <Input placeholder="Enter Name"></Input>
//             </form>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
