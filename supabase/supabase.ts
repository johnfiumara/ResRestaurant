export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Booking: {
        Row: {
          booker_email: string
          booker_first_name: string
          booker_last_name: string
          booker_occasion: string | null
          booker_phone: string
          booker_request: string | null
          booking_time: string
          created_at: string
          id: number
          number_of_people: number
          restaurant_id: number
          updated_at: string
        }
        Insert: {
          booker_email: string
          booker_first_name: string
          booker_last_name: string
          booker_occasion?: string | null
          booker_phone: string
          booker_request?: string | null
          booking_time: string
          created_at?: string
          id?: number
          number_of_people: number
          restaurant_id: number
          updated_at: string
        }
        Update: {
          booker_email?: string
          booker_first_name?: string
          booker_last_name?: string
          booker_occasion?: string | null
          booker_phone?: string
          booker_request?: string | null
          booking_time?: string
          created_at?: string
          id?: number
          number_of_people?: number
          restaurant_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Booking_restaurant_id_fkey"
            columns: ["restaurant_id"]
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          }
        ]
      }
      BookingsOnTables: {
        Row: {
          booking_id: number
          created_at: string
          table_id: number
          updated_at: string
        }
        Insert: {
          booking_id: number
          created_at?: string
          table_id: number
          updated_at: string
        }
        Update: {
          booking_id?: number
          created_at?: string
          table_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "BookingsOnTables_booking_id_fkey"
            columns: ["booking_id"]
            referencedRelation: "Booking"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "BookingsOnTables_table_id_fkey"
            columns: ["table_id"]
            referencedRelation: "Table"
            referencedColumns: ["id"]
          }
        ]
      }
      Cuisine: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      Item: {
        Row: {
          created_at: string
          description: string
          id: number
          name: string
          price: string
          restaurant_id: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          name: string
          price: string
          restaurant_id: number
          updated_at: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          name?: string
          price?: string
          restaurant_id?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Item_restaurant_id_fkey"
            columns: ["restaurant_id"]
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          }
        ]
      }
      Location: {
        Row: {
          created_at: string
          id: number
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      Restaurant: {
        Row: {
          close_time: string
          created_at: string
          cuisine_id: number
          description: string
          id: number
          images: string[] | null
          location_id: number
          main_image: string
          name: string
          open_time: string
          price: Database["public"]["Enums"]["PRICE"]
          slug: string
          updated_at: string
        }
        Insert: {
          close_time: string
          created_at?: string
          cuisine_id: number
          description: string
          id?: number
          images?: string[] | null
          location_id: number
          main_image: string
          name: string
          open_time: string
          price: Database["public"]["Enums"]["PRICE"]
          slug: string
          updated_at: string
        }
        Update: {
          close_time?: string
          created_at?: string
          cuisine_id?: number
          description?: string
          id?: number
          images?: string[] | null
          location_id?: number
          main_image?: string
          name?: string
          open_time?: string
          price?: Database["public"]["Enums"]["PRICE"]
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Restaurant_cuisine_id_fkey"
            columns: ["cuisine_id"]
            referencedRelation: "Cuisine"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Restaurant_location_id_fkey"
            columns: ["location_id"]
            referencedRelation: "Location"
            referencedColumns: ["id"]
          }
        ]
      }
      Review: {
        Row: {
          first_name: string
          id: number
          last_name: string
          rating: number
          restaurant_id: number
          text: string
          user_id: number
        }
        Insert: {
          first_name: string
          id?: number
          last_name: string
          rating: number
          restaurant_id: number
          text: string
          user_id: number
        }
        Update: {
          first_name?: string
          id?: number
          last_name?: string
          rating?: number
          restaurant_id?: number
          text?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "Review_restaurant_id_fkey"
            columns: ["restaurant_id"]
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Review_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Table: {
        Row: {
          created_at: string
          id: number
          restaurant_id: number
          seats: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          restaurant_id: number
          seats: number
          updated_at: string
        }
        Update: {
          created_at?: string
          id?: number
          restaurant_id?: number
          seats?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "Table_restaurant_id_fkey"
            columns: ["restaurant_id"]
            referencedRelation: "Restaurant"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          city: string
          created_at: string
          email: string
          first_name: string
          id: number
          last_name: string
          password: string
          phone: string
          updated_at: string
        }
        Insert: {
          city: string
          created_at?: string
          email: string
          first_name: string
          id?: number
          last_name: string
          password: string
          phone: string
          updated_at: string
        }
        Update: {
          city?: string
          created_at?: string
          email?: string
          first_name?: string
          id?: number
          last_name?: string
          password?: string
          phone?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      PRICE: "CHEAP" | "REGULAR" | "EXPENSIVE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
