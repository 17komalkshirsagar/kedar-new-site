import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, EyeOff, Sprout, User, Mail, Phone, MapPin, Lock } from 'lucide-react';
import { toast } from 'sonner';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    pincode: '',
    farmSize: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    agreeNewsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!registerForm.firstName || !registerForm.lastName || !registerForm.email || 
        !registerForm.phone || !registerForm.password || !registerForm.confirmPassword) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (registerForm.password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (!registerForm.agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    // Mock registration - in real app, send to backend
    toast.success('Registration successful! Please login to continue.');
    navigate('/login');
  };

  const farmSizeOptions = [
    'Less than 1 acre',
    '1-5 acres',
    '5-10 acres',
    '10-25 acres',
    '25-50 acres',
    'More than 50 acres'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <Card className="shadow-xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Sprout className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl">Create Account</CardTitle>
              <CardDescription>
                Join Kedar Krushi Seva Kendra for personalized farming solutions
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="firstName"
                        placeholder="First name"
                        value={registerForm.firstName}
                        onChange={(e) => setRegisterForm({...registerForm, firstName: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        value={registerForm.lastName}
                        onChange={(e) => setRegisterForm({...registerForm, lastName: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="+91 9876543210"
                        value={registerForm.phone}
                        onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Address Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      placeholder="Enter your address"
                      value={registerForm.address}
                      onChange={(e) => setRegisterForm({...registerForm, address: e.target.value})}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="City"
                      value={registerForm.city}
                      onChange={(e) => setRegisterForm({...registerForm, city: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select value={registerForm.state} onValueChange={(value) => setRegisterForm({...registerForm, state: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="Karnataka">Karnataka</SelectItem>
                        <SelectItem value="Gujarat">Gujarat</SelectItem>
                        <SelectItem value="Rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input
                      id="pincode"
                      placeholder="431103"
                      value={registerForm.pincode}
                      onChange={(e) => setRegisterForm({...registerForm, pincode: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Farm Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Farm Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="farmSize">Farm Size</Label>
                  <Select value={registerForm.farmSize} onValueChange={(value) => setRegisterForm({...registerForm, farmSize: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your farm size" />
                    </SelectTrigger>
                    <SelectContent>
                      {farmSizeOptions.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Security</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create password"
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password *</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm password"
                        value={registerForm.confirmPassword}
                        onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={registerForm.agreeTerms}
                    onCheckedChange={(checked) => setRegisterForm({...registerForm, agreeTerms: checked as boolean})}
                    className="mt-1"
                  />
                  <Label htmlFor="terms" className="text-sm leading-5">
                    I agree to the{' '}
                    <Link to="#" className="text-green-600 hover:underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link to="#" className="text-green-600 hover:underline">Privacy Policy</Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={registerForm.agreeNewsletter}
                    onCheckedChange={(checked) => setRegisterForm({...registerForm, agreeNewsletter: checked as boolean})}
                    className="mt-1"
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-5">
                    Send me updates about new products and farming tips
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link to="/login" className="text-green-600 hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;