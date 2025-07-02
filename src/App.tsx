import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Reviews from '@/pages/Reviews';
import Contact from '@/pages/Contact';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import './App.css';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="kedar-krushi-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Layout>
        <WhatsAppFloat />
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;