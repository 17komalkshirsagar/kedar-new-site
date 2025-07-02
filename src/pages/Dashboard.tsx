import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Settings, 
  ShoppingBag, 
  Heart, 
  MessageSquare, 
  Star, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Edit,
  LogOut
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const user = {
    name: 'John Farmer',
    email: 'john@example.com',
    phone: '+91 9876543210',
    address: 'Village Kannad, Maharashtra',
    farmSize: '5-10 acres',
    joinDate: 'January 2024',
    avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=100'
  };

  const stats = [
    { label: 'Total Inquiries', value: '12', icon: ShoppingBag, color: 'text-blue-600' },
    { label: 'Wishlist Items', value: '8', icon: Heart, color: 'text-red-600' },
    { label: 'Reviews Given', value: '5', icon: MessageSquare, color: 'text-green-600' },
    { label: 'Member Since', value: '11 months', icon: Calendar, color: 'text-purple-600' }
  ];

  const recentInquiries = [
    {
      id: 1,
      product: 'Hybrid Cotton Seeds BT-1',
      date: '2024-01-15',
      status: 'Replied',
      image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 2,
      product: 'Roundup Herbicide',
      date: '2024-01-10',
      status: 'Pending',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: 3,
      product: 'NPK Fertilizer 20:20:20',
      date: '2024-01-08',
      status: 'Completed',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Tomato Hybrid Seeds',
      price: 1150,
      image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=100',
      inStock: true
    },
    {
      id: 2,
      name: 'Confidor Insecticide',
      price: 890,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=100',
      inStock: false
    }
  ];

  const reviews = [
    {
      id: 1,
      product: 'Hybrid Cotton Seeds BT-1',
      rating: 5,
      comment: 'Excellent seeds! Got great yield this season.',
      date: '2024-01-12'
    },
    {
      id: 2,
      product: 'Tilt Fungicide',
      rating: 4,
      comment: 'Good product, worked well for my crop.',
      date: '2024-01-05'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-muted/30 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
                <p className="text-muted-foreground">Manage your farming needs from here</p>
              </div>
            </div>
            <Button variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Inquiries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentInquiries.slice(0, 3).map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center space-x-4">
                      <img 
                        src={inquiry.image} 
                        alt={inquiry.product}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{inquiry.product}</p>
                        <p className="text-xs text-muted-foreground">{inquiry.date}</p>
                      </div>
                      <Badge 
                        variant={inquiry.status === 'Completed' ? 'default' : 
                                inquiry.status === 'Replied' ? 'secondary' : 'outline'}
                      >
                        {inquiry.status}
                      </Badge>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab('inquiries')}>
                    View All Inquiries
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {reviews.slice(0, 2).map((review) => (
                    <div key={review.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{review.product}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" onClick={() => setActiveTab('reviews')}>
                    View All Reviews
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inquiries" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Inquiries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img 
                      src={inquiry.image} 
                      alt={inquiry.product}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{inquiry.product}</h3>
                      <p className="text-sm text-muted-foreground">Inquiry Date: {inquiry.date}</p>
                    </div>
                    <Badge 
                      variant={inquiry.status === 'Completed' ? 'default' : 
                              inquiry.status === 'Replied' ? 'secondary' : 'outline'}
                    >
                      {inquiry.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Wishlist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 space-y-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-lg font-bold text-green-600">₹{item.price}</p>
                        <Badge variant={item.inStock ? 'default' : 'secondary'}>
                          {item.inStock ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1" disabled={!item.inStock}>
                          Inquire
                        </Button>
                        <Button variant="outline" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Product Reviews</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{review.product}</h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                    <p className="text-sm text-muted-foreground">Reviewed on {review.date}</p>
                    <Button variant="outline" size="sm">
                      Edit Review
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Personal Information
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">Full Name</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{user.email}</p>
                      <p className="text-sm text-muted-foreground">Email Address</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{user.phone}</p>
                      <p className="text-sm text-muted-foreground">Phone Number</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{user.address}</p>
                      <p className="text-sm text-muted-foreground">Address</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Farm Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-medium">Farm Size</p>
                    <p className="text-sm text-muted-foreground">{user.farmSize}</p>
                  </div>
                  <div>
                    <p className="font-medium">Member Since</p>
                    <p className="text-sm text-muted-foreground">{user.joinDate}</p>
                  </div>
                  <div>
                    <p className="font-medium">Account Type</p>
                    <Badge>Farmer</Badge>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;