BEGIN;

-- Images
INSERT INTO images (id, url, alt, caption) VALUES
  ('10000000-0000-0000-0000-000000000001'::uuid,'https://doublecheck.com.co/assets/logo.png','DoubleCheck logo',''),
  ('10000000-0000-0000-0000-000000000002'::uuid,'https://doublecheck.com.co/assets/hero.jpg','Hero image',''),
  ('10000000-0000-0000-0000-000000000011'::uuid,'https://doublecheck.com.co/assets/service-verify.svg','Verify icon',''),
  ('10000000-0000-0000-0000-000000000012'::uuid,'https://doublecheck.com.co/assets/service-monitor.svg','Monitor icon',''),
  ('10000000-0000-0000-0000-000000000013'::uuid,'https://doublecheck.com.co/assets/service-report.svg','Report icon',''),
  ('10000000-0000-0000-0000-000000000021'::uuid,'https://doublecheck.com.co/assets/plan-feature.png','Plan image',''),
  ('10000000-0000-0000-0000-000000000031'::uuid,'https://doublecheck.com.co/assets/team/maria-gomez.jpg','María Gómez photo','Head of Risk'),
  ('10000000-0000-0000-0000-000000000032'::uuid,'https://doublecheck.com.co/assets/team/juan-perez.jpg','Juan Pérez photo','CTO'),
  ('10000000-0000-0000-0000-000000000033'::uuid,'https://doublecheck.com.co/assets/team/ana-ruiz.jpg','Ana Ruiz photo','Product Lead');

-- Social networks
INSERT INTO social_networks (id, name, url, icon_image_id, "order") VALUES
  ('50000000-0000-0000-0000-000000000001'::uuid,'Twitter','https://twitter.com/doublecheck',NULL,1),
  ('50000000-0000-0000-0000-000000000002'::uuid,'LinkedIn','https://linkedin.com/company/doublecheck',NULL,2),
  ('50000000-0000-0000-0000-000000000003'::uuid,'Facebook','https://facebook.com/doublecheck',NULL,3);

-- Header settings (global)
INSERT INTO header_settings (id, logo_image_id, show_cta, cta_text, cta_url, nav_settings)
VALUES (
  '60000000-0000-0000-0000-000000000001'::uuid,
  '10000000-0000-0000-0000-000000000001'::uuid,
  true,
  'Get Started',
  '/signup',
  '{"sticky": true, "theme": "light"}'::jsonb
);

-- Footer settings
INSERT INTO footer_settings (id, logo_image_id, copyright_text, footer_links)
VALUES (
  '60000000-0000-0000-0000-000000000002'::uuid,
  '10000000-0000-0000-0000-000000000001'::uuid,
  '© ' || EXTRACT(YEAR FROM now()) || ' DoubleCheck. All rights reserved.',
  '[{ "label": "Privacy", "url": "/privacy" },{ "label": "Terms", "url": "/terms" },{ "label": "Contact", "url": "/contact" }]'::jsonb
);

-- Pages
INSERT INTO pages (id, slug, title, meta_title, meta_description, is_published, locale)
VALUES
  ('11111111-1111-1111-1111-111111111111'::uuid,'/','DoubleCheck — Verify and Monitor Your Data','DoubleCheck — Verify and Monitor','Leading verification and monitoring tools for your business', true, 'en'),
  ('22222222-2222-2222-2222-222222222222'::uuid,'/services','Services — DoubleCheck','Services — DoubleCheck','Our offered services', true, 'en'),
  ('33333333-3333-3333-3333-333333333333'::uuid,'/pricing','Pricing — DoubleCheck','Pricing — DoubleCheck','Simple pricing for teams and enterprises', true, 'en');

-- Nav links
INSERT INTO nav_links (id, label, url, page_id, "order")
VALUES
  ('40000000-0000-0000-0000-000000000001'::uuid,'Home','/', '11111111-1111-1111-1111-111111111111'::uuid, 1),
  ('40000000-0000-0000-0000-000000000002'::uuid,'Services','/services','22222222-2222-2222-2222-222222222222'::uuid, 2),
  ('40000000-0000-0000-0000-000000000003'::uuid,'Pricing','/pricing','33333333-3333-3333-3333-333333333333'::uuid, 3),
  ('40000000-0000-0000-0000-000000000004'::uuid,'Contact','/contact', NULL, 4);

-- Services master rows
INSERT INTO services (id, title, slug, description, icon_image_id)
VALUES
  ('20000000-0000-0000-0000-000000000001'::uuid,'Verification API','verification-api','Real-time data verification API','10000000-0000-0000-0000-000000000011'::uuid),
  ('20000000-0000-0000-0000-000000000002'::uuid,'Monitoring','monitoring','Continuous monitoring and alerts','10000000-0000-0000-0000-000000000012'::uuid),
  ('20000000-0000-0000-0000-000000000003'::uuid,'Reporting','reporting','Automated reports and insights','10000000-0000-0000-0000-000000000013'::uuid);

-- Plans master rows
INSERT INTO plans (id, title, slug, price, currency, billing_interval, features, cta_text, cta_url, rank)
VALUES
  ('30000000-0000-0000-0000-000000000001'::uuid,'Starter','starter',19.00,'USD','monthly','["100 checks / month","Email support"]'::jsonb,'Start free trial','/signup?plan=starter',1),
  ('30000000-0000-0000-0000-000000000002'::uuid,'Pro','pro',79.00,'USD','monthly','["1,000 checks / month","Priority support","Team seats"]'::jsonb,'Start 14-day trial','/signup?plan=pro',2),
  ('30000000-0000-0000-0000-000000000003'::uuid,'Enterprise','enterprise',499.00,'USD','monthly','["Unlimited checks","SLA & onboarding","Dedicated support"]'::jsonb,'Contact sales','/contact',3);

-- Page sections for Home page
INSERT INTO page_sections (id, page_id, type, settings, position)
VALUES
  ('50000000-0000-0000-0000-000000000001'::uuid,'11111111-1111-1111-1111-111111111111'::uuid,'hero',
    ('{"heading":"Fast, reliable verification","subheading":"Protect your business with DoubleCheck","background_image_id":"10000000-0000-0000-0000-000000000002"}')::jsonb, 0),
  ('50000000-0000-0000-0000-000000000002'::uuid,'11111111-1111-1111-1111-111111111111'::uuid,'services',
    ('{"columns":3,"title":"What we offer"}')::jsonb, 1),
  ('50000000-0000-0000-0000-000000000003'::uuid,'11111111-1111-1111-1111-111111111111'::uuid,'plans',
    ('{"title":"Choose a plan","highlight":"Most popular"}')::jsonb, 2);

-- Content blocks for hero
INSERT INTO content_blocks (id, section_id, block_type, title, subtitle, body, image_id, position)
VALUES
  ('70000000-0000-0000-0000-000000000001'::uuid,'50000000-0000-0000-0000-000000000001'::uuid,'text',
    'Fast, reliable verification','Reduce fraud and improve conversion','Use our API to validate data instantly.','10000000-0000-0000-0000-000000000002'::uuid, 0);

-- Content blocks for services (referencing services by subject_type/subject_id)
INSERT INTO content_blocks (id, section_id, block_type, title, body, image_id, subject_type, subject_id, position)
VALUES
  ('70000000-0000-0000-0000-000000000011'::uuid,'50000000-0000-0000-0000-000000000002'::uuid,'service_card','Verification API','Validate emails, phones and documents quickly.','10000000-0000-0000-0000-000000000011'::uuid,'service','20000000-0000-0000-0000-000000000001'::uuid, 0),
  ('70000000-0000-0000-0000-000000000012'::uuid,'50000000-0000-0000-0000-000000000002'::uuid,'service_card','Monitoring','Get alerted when important data changes.','10000000-0000-0000-0000-000000000012'::uuid,'service','20000000-0000-0000-0000-000000000002'::uuid, 1),
  ('70000000-0000-0000-0000-000000000013'::uuid,'50000000-0000-0000-0000-000000000002'::uuid,'service_card','Reporting','Scheduled reports and analytics.','10000000-0000-0000-0000-000000000013'::uuid,'service','20000000-0000-0000-0000-000000000003'::uuid, 2);

-- Content blocks for plans (referencing plan ids)
INSERT INTO content_blocks (id, section_id, block_type, title, body, extra, subject_type, subject_id, position)
VALUES
  ('70000000-0000-0000-0000-000000000021'::uuid,'50000000-0000-0000-0000-000000000003'::uuid,'plan_card','Starter','Great for individuals and small projects', '{"price":19,"currency":"USD"}'::jsonb,'plan','30000000-0000-0000-0000-000000000001'::uuid, 0),
  ('70000000-0000-0000-0000-000000000022'::uuid,'50000000-0000-0000-0000-000000000003'::uuid,'plan_card','Pro','For growing teams and businesses', '{"price":79,"currency":"USD"}'::jsonb,'plan','30000000-0000-0000-0000-000000000002'::uuid, 1),
  ('70000000-0000-0000-0000-000000000023'::uuid,'50000000-0000-0000-0000-000000000003'::uuid,'plan_card','Enterprise','Full features and SLA', '{"price":499,"currency":"USD"}'::jsonb,'plan','30000000-0000-0000-0000-000000000003'::uuid, 2);

-- Site settings (primary contact + theme)
INSERT INTO site_settings (id, site_name, domain, default_locale, contact_email, contact_phone, address, theme)
VALUES (
  '90000000-0000-0000-0000-000000000001'::uuid,
  'DoubleCheck',
  'doublecheck.com.co',
  'es',
  'hola@doublecheck.com.co',
  '+57 1 234 5678',
  '{"street":"Calle Falsa 123","city":"Bogotá","country":"Colombia"}'::jsonb,
  '{"primaryColor":"#0B5FFF","accentColor":"#00C48C"}'::jsonb
);

-- Contact infos
INSERT INTO contact_infos (id, type, email, phone, hours)
VALUES
  ('91000000-0000-0000-0000-000000000001'::uuid,'support','soporte@doublecheck.com.co','+57 1 234 5679','Lun-Vie 9:00-18:00'),
  ('91000000-0000-0000-0000-000000000002'::uuid,'sales','ventas@doublecheck.com.co','+57 1 234 5680','Lun-Vie 9:00-18:00');

-- Testimonials (Spanish)
INSERT INTO testimonials (id, author_name, author_title, body, author_image_id, "order", locale)
VALUES
  ('92000000-0000-0000-0000-000000000001'::uuid,'María Gómez','Head of Risk, ACME','DoubleCheck nos ayudó a reducir el fraude un 40% en tres meses.','10000000-0000-0000-0000-000000000021'::uuid,1,'es'),
  ('92000000-0000-0000-0000-000000000002'::uuid,'Juan Pérez','CTO, StartCo','La integración fue muy rápida y el soporte es excelente.','10000000-0000-0000-0000-000000000021'::uuid,2,'es');

-- Partners / logos
INSERT INTO partners (id, name, website, logo_image_id, "order")
VALUES
  ('93000000-0000-0000-0000-000000000001'::uuid,'Banco Ejemplo','https://bancoejemplo.com','10000000-0000-0000-0000-000000000021'::uuid,1),
  ('93000000-0000-0000-0000-000000000002'::uuid,'Fintech Co','https://fintech.co','10000000-0000-0000-0000-000000000021'::uuid,2);

-- Blog posts / resources (sample Spanish posts)
INSERT INTO blog_posts (id, slug, title, excerpt, body, cover_image_id, published_at, is_published, locale)
VALUES
  ('94000000-0000-0000-0000-000000000001'::uuid,'introduccion-verificacion','Introducción a la verificación de datos','Cómo empezar a verificar emails y teléfonos','Contenido de ejemplo...','10000000-0000-0000-0000-000000000021'::uuid, now(), true, 'es'),
  ('94000000-0000-0000-0000-000000000002'::uuid,'monitoreo-continuo','Monitoreo continuo para tu negocio','Ventajas de monitorizar cambios críticos','Contenido de ejemplo...','10000000-0000-0000-0000-000000000021'::uuid, now(), true, 'es');

-- Case study sample
INSERT INTO case_studies (id, slug, title, excerpt, body, cover_image_id, published_at, is_published, locale)
VALUES
  ('95000000-0000-0000-0000-000000000001'::uuid,'caso-banco-ejemplo','Cómo Banco Ejemplo redujo el fraude','Resumen del caso','Caso completo...','10000000-0000-0000-0000-000000000021'::uuid, now(), true, 'es');

-- Collaborators / team members
INSERT INTO collaborators (id, full_name, role, bio, photo_image_id, social_links, skills, featured, "order", locale)
VALUES
  (
    'a1000000-0000-0000-0000-000000000001'::uuid,
    'María Gómez',
    'Head of Risk',
    'Responsable de estrategias antifraude y gestión de riesgo. 10+ años en fintech y bancos.',
    '10000000-0000-0000-0000-000000000031'::uuid,
    '[{"network":"LinkedIn","url":"https://linkedin.com/in/maria-gomez"},{"network":"Twitter","url":"https://twitter.com/maria_gomez"}]'::jsonb,
    '["Fraud detection","Risk modeling","Data pipelines"]'::jsonb,
    true,
    1,
    'es'
  ),
  (
    'a1000000-0000-0000-0000-000000000002'::uuid,
    'Juan Pérez',
    'CTO',
    'Arquitecto de plataformas y responsable de la infraestructura de verificación en tiempo real.',
    '10000000-0000-0000-0000-000000000032'::uuid,
    '[{"network":"LinkedIn","url":"https://linkedin.com/in/juan-perez"}]'::jsonb,
    '["Backend","APIs","Scalability"]'::jsonb,
    true,
    2,
    'es'
  ),
  (
    'a1000000-0000-0000-0000-000000000003'::uuid,
    'Ana Ruiz',
    'Product Lead',
    'Lidera el producto y la experiencia de usuario, enfocada en integraciones y adopción.',
    '10000000-0000-0000-0000-000000000033'::uuid,
    '[{"network":"LinkedIn","url":"https://linkedin.com/in/ana-ruiz"}]'::jsonb,
    '["Product","UX","Integrations"]'::jsonb,
    false,
    3,
    'es'
  );

COMMIT;
