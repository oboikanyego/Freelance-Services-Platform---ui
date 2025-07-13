import { Service } from './service.model';

export interface Order {
  _id: string;
  buyerId: { _id: string; name: string };
  freelancerId: { _id: string; name: string };
  serviceId: Service;
  status: 'pending' | 'in progress' | 'delivered' | 'completed';
  createdAt: string;
}
