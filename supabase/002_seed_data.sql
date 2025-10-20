BEGIN;

-- Clear existing data first
TRUNCATE TABLE 
  contact_submissions,
  content_blocks,
  page_sections,
  blog_posts,
  case_studies,
  testimonials,
  partners,
  collaborators,
  plans,
  services,
  nav_links,
  pages,
  footer_settings,
  header_settings,
  site_settings,
  contact_infos,
  social_networks,
  images
RESTART IDENTITY CASCADE;

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
  ('40000000-0000-0000-0000-000000000002'::uuid,'Servicios','/services','22222222-2222-2222-2222-222222222222'::uuid, 2),
  ('40000000-0000-0000-0000-000000000003'::uuid,'Planes','/pricing','33333333-3333-3333-3333-333333333333'::uuid, 3),
  ('40000000-0000-0000-0000-000000000004'::uuid,'Contactanos','/contact', NULL, 4);

-- Services master rows
INSERT INTO services (id, title, slug, description, icon_image_id, metadata)
VALUES
  ('20000000-0000-0000-0000-000000000001'::uuid,'Diseño Web','diseno-web','Creamos sitios web visualmente impresionantes y fáciles de usar, utilizando diseño y tecnología moderna.','10000000-0000-0000-0000-000000000011'::uuid, '{"features":["Diseño responsivo y mobile-first","Optimización SEO avanzada","Velocidad de carga superior","Integración con analytics","Soporte técnico continuo"]}'::jsonb),
  ('20000000-0000-0000-0000-000000000002'::uuid,'Diseño de Branding','diseno-branding','El diseño de branding establece una identidad única y memorable para tu negocio a través de logotipos, colores y elementos visuales.','10000000-0000-0000-0000-000000000012'::uuid, '{"features":["Investigación de marca completa","Logo y identidad visual","Guía de marca detallada","Aplicaciones multimedia","Estrategia de posicionamiento"]}'::jsonb),
  ('20000000-0000-0000-0000-000000000003'::uuid,'Fábrica de Software','fabrica-software','Convertimos tus ideas en realidad creando soluciones de software personalizadas, fáciles de usar y escalables.','10000000-0000-0000-0000-000000000013'::uuid, '{"features":["Desarrollo a medida","Arquitectura escalable","Metodologías ágiles","Testing automatizado","Mantenimiento continuo"]}'::jsonb),
  ('20000000-0000-0000-0000-000000000004'::uuid,'Marketing Digital','marketing-digital','Impulsa tu negocio con estrategias innovadoras de marketing digital, incluyendo SEO, redes sociales y soluciones personalizadas.','10000000-0000-0000-0000-000000000011'::uuid, '{"features":["Estrategias SEO/SEM","Gestión de redes sociales","Campañas de email marketing","Analítica y reporting","Publicidad digital"]}'::jsonb);

-- Plans master rows
INSERT INTO plans (id, title, slug, price, currency, billing_interval, features, cta_text, cta_url, rank, metadata)
VALUES
  ('30000000-0000-0000-0000-000000000001'::uuid,'PREMIUM','premium',1200000,'COP','monthly','["Campaña de anuncios","Estrategia de Contenidos SEO","Optimización de conversiones","Analítica Básica","Redes Sociales","Publicidad Puntos Turísticos","Email Marketing","Integraciones","SEO on Page + Auditoría","Contenido Magnético","Account Manager"]'::jsonb,'Comprar','/contact?plan=premium',1, '{"description":"Empieza a tener presencia digital y escalar tu negocio","subtitle":"Perfecto para emprendedores y empresas con presupuesto reducido. Incluye ppto de campañas básico","popular":false}'::jsonb),
  ('30000000-0000-0000-0000-000000000002'::uuid,'MOST POPULAR','most-popular',2000000,'COP','monthly','["Campaña de anuncios","Estrategia de Contenidos SEO","Optimización de conversiones","Analítica Básica","Redes Sociales","Publicidad Puntos Turísticos","Email Marketing","Integraciones","SEO on Page + Auditoría","Contenido Magnético","Account Manager"]'::jsonb,'Comprar','/contact?plan=most-popular',2, '{"description":"Escalabilidad y visibilidad de tu negocio en puntos turísticos de la ciudad","subtitle":"Perfecto para emprendedores y empresas con presupuesto reducido y cuyo nicho de mercado es el turismo. Incluye ppto de campañas básico","popular":true}'::jsonb),
  ('30000000-0000-0000-0000-000000000003'::uuid,'DIGITAL','digital',1500000,'COP','monthly','["Campaña de anuncios","Estrategia de Contenidos SEO","Optimización de conversiones","Analítica Básica","Redes Sociales","Publicidad Puntos Turísticos","Email Marketing","Integraciones","SEO on Page + Auditoría","Contenido Magnético","Account Manager"]'::jsonb,'Comprar','/contact?plan=digital',3, '{"description":"El mejor plan para atraer y fidelizar más clientes y generar Base de datos.","subtitle":"Este plan es perfecto para websites con no más de 5 servicios y tiendas online de menos de 100 productos. Incluye ppto de campañas básico","popular":false}'::jsonb),
  ('30000000-0000-0000-0000-000000000004'::uuid,'DIGITAL PRO','digital-pro',2500000,'COP','monthly','["Campaña de anuncios","Estrategia de Contenidos SEO","Optimización de conversiones","Analítica Avanzada","Redes Sociales","Publicidad Puntos Turísticos","Email Marketing","Integraciones","SEO on Page + Auditoría","Contenido Magnético","Account Manager"]'::jsonb,'Comprar','/contact?plan=digital-pro',4, '{"description":"Una estrategia que impacta tus resultados digitales a gran escala","subtitle":"Este plan es perfecto para educar, atraer, convertir y retener a tus clientes a lo largo de su ciclo de compra. Incluye ppto de campañas básico","popular":false}'::jsonb),
  ('30000000-0000-0000-0000-000000000005'::uuid,'DIGITAL PRO MAX','digital-pro-max',3500000,'COP','monthly','["Campaña de anuncios","Estrategia de Contenidos SEO","Optimización de conversiones","Analítica Básica","Redes Sociales","Publicidad Puntos Turísticos","Email Marketing","Integraciones","SEO on Page + Auditoría","Contenido Magnético","Account Manager","Landing Page estática"]'::jsonb,'Comprar','/contact?plan=digital-pro-max',5, '{"description":"Ideal para emprendedores que no cuentan con página web y quiere maximizar sus resultados","subtitle":"Alto impacto para retener clientes a lo largo de su ciclo de compra al mismo tiempo que expone su marca. Incluye ppto de campañas básico","popular":false}'::jsonb);

-- Page sections for Home page
INSERT INTO page_sections (id, page_id, type, settings, position)
VALUES
  ('50000000-0000-0000-0000-000000000001'::uuid,'11111111-1111-1111-1111-111111111111'::uuid,'hero',
    ('{"heading":"Rápido, inteligente y confiable","subheading":"Adquiere tu própio asistente personal","background_image_id":"10000000-0000-0000-0000-000000000002"}')::jsonb, 0),
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
    'Oscar Montoya',
    'Arquitecto de soluciones & Co-Founder',
    'Experto en transformación digital con más de 20 años creando soluciones innovadoras para empresas.',
    '10000000-0000-0000-0000-000000000031'::uuid,
    '[{"network":"LinkedIn","url":"https://linkedin.com/in/carlos-rodriguez"}]'::jsonb,
    '["Liderazgo","Estrategia","Innovación"]'::jsonb,
    true,
    1,
    'es'
  ),
  (
    'a1000000-0000-0000-0000-000000000002'::uuid,
    'Saul Gómez',
    'Director Técnico & Co-Founder',
    'Líder tecnológico con más de 10 años de experiencia desarrollando productos digitales escalables y dirigiendo equipos de alto rendimiento.',
    '10000000-0000-0000-0000-000000000032'::uuid,
    '[{"network":"LinkedIn","url":"https://www.linkedin.com/in/saul-gomez-webui-frontend-react/"}]'::jsonb,
    '["Branding","UI/UX","Creatividad"]'::jsonb,
    true,
    2,
    'es'
  ),
  (
    'a1000000-0000-0000-0000-000000000003'::uuid,
    'Carlos Orrego',
    'CEO & Co-Founder',
    'Visionario empresarial con amplia experiencia en desarrollo de negocios y estrategias comerciales que impulsan el crecimiento sostenible.',
    '10000000-0000-0000-0000-000000000033'::uuid,
    '[{"network":"LinkedIn","url":"https://linkedin.com/"}]'::jsonb,
    '["Full-Stack","DevOps","Architecture"]'::jsonb,
    true,
    3,
    'es'
  ),
  (
    'a1000000-0000-0000-0000-000000000004'::uuid,
    'Fernanda Zuleta',
    'Marketing Manager  & Co-Founder',
    'Experta en marketing digital y estrategias de crecimiento, especializada en construir marcas sólidas y campañas efectivas que conectan con las audiencias.',
    '10000000-0000-0000-0000-000000000031'::uuid,
    '[{"network":"LinkedIn","url":"https://linkedin.com/"}]'::jsonb,
    '["SEO/SEM","Analytics","Growth"]'::jsonb,
    true,
    4,
    'es'
  );

COMMIT;
