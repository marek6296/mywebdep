-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  project_type TEXT,
  budget TEXT,
  deadline TEXT,
  has_texts TEXT,
  has_brand TEXT,
  page_count TEXT,
  seo BOOLEAN DEFAULT false,
  blog BOOLEAN DEFAULT false,
  integrations BOOLEAN DEFAULT false,
  booking BOOLEAN DEFAULT false,
  payments BOOLEAN DEFAULT false,
  message TEXT NOT NULL,
  gdpr BOOLEAN NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referer TEXT,
  ip_address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for API)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow service role to read all (for admin)
CREATE POLICY "Allow service role to read all" ON leads
  FOR SELECT
  TO service_role
  USING (true);

-- Optional: Create a view for admin dashboard
CREATE OR REPLACE VIEW leads_summary AS
SELECT
  id,
  name,
  email,
  project_type,
  budget,
  created_at,
  CASE
    WHEN created_at > NOW() - INTERVAL '24 hours' THEN true
    ELSE false
  END as is_recent
FROM leads
ORDER BY created_at DESC;

