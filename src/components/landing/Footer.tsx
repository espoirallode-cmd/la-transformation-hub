const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <a href="#" className="font-heading text-xl font-bold text-foreground">
              Aurélie<span className="text-primary">.</span>
            </a>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Coach en développement personnel · France & Belgique
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram icon-white" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <i className="fab fa-facebook-f icon-white" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
              <i className="fab fa-tiktok icon-white" />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Aurélie Coaching. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
